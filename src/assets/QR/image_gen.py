from PIL import Image, ImageDraw, ImageFont
import json

with open('../../data.json') as file:
    data = json.load(file)

for i in data['companies']:
    nombre = i['name']
    img = Image.open(f'{nombre}_qr.png', 'r')
    img_w, img_h = img.size
    background = Image.open('qr_template.png')
    background.thumbnail((1000, 1000), Image.ANTIALIAS)
    bg_w, bg_h = background.size

    offset = ((bg_w - img_w) // 2 + 230, (bg_h - img_h) // 2)
    offset2 = ((bg_w - img_w) // 2 + 210, (bg_h- img_h)//2 - 20)

    frame = Image.open('cuadro.png')
    frame.thumbnail((img_w + 40, img_h + 40 ), Image.ANTIALIAS)
    background.paste(frame, offset2)
    background.paste(img, offset)
    fnt = ImageFont.truetype("arial.ttf", 50)
    draw = ImageDraw.Draw(background)
    x = 300
    if len(i['webpage'])>= 35:
        x = 50
        fnt = ImageFont.truetype("arial.ttf", 40)
    draw.text((x, 920),'www.' + i['webpage'].strip('http://').strip('https://').strip('www.'),(255,255,255), font=fnt)
    background.save(f'{nombre}_qr.png')
