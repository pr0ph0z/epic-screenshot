const Jimp = require('jimp')

Jimp.read('asset/base_image.jpg')
  .then(lenna => {
    Jimp.read('https://cdn.discordapp.com/avatars/414577521263247367/88561d03320ab2f4567462fdeeddab3a.png?size=2048')
      .then(avatar => {
        avatar.resize(128, 128)
        Jimp.read('asset/avatar-masking.png')
          .then(mask => {
            avatar.mask(mask, 0, 0)
            lenna.composite(
              avatar,
              (lenna.bitmap.width * 0.05),
              (lenna.bitmap.height/2) - (avatar.bitmap.height/2)
            )
            Jimp.loadFont(Jimp.FONT_SANS_32_WHITE)
              .then(font => {
                lenna.print(
                  font,
                  (lenna.bitmap.width * 0.1) + (avatar.bitmap.width),
                  (lenna.bitmap.height/2) - (avatar.bitmap.height/2),
                  'Anak Durhaka'
                )
                Jimp.loadFont(Jimp.FONT_SANS_16_WHITE)
                .then(font => {
                  lenna.print(
                    font,
                    (lenna.bitmap.width * 0.1) + (avatar.bitmap.width),
                    (lenna.bitmap.height/2) - (avatar.bitmap.height * 0.2),
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit lacus risus, at ultrices dolor venenatis at. In libero metus, sollicitudin non imperdiet a, dignissim eu magna. Morbi at finibus ligula, eu molestie diam. Nullam vehicula, erat finibus accumsan mattis, mi lacus commodo sem, et auctor quam elit sed felis. Nulla facilisis arcu mi, at ullamcorper lorem ornare in.`,
                    500
                  )
                  lenna.write('imagetest.jpg')
                })
              })
          })
      })
  })
  .catch(err => {
    console.error(err);
  });