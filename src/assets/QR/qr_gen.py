import qrcode
import os
import json

with open('../../data.json') as file:
    data = json.load(file)

for i in data['companies']:
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10
    )
    qr.add_data(i['webpage'])
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    img.save("{}_qr.png".format(i['name']))
