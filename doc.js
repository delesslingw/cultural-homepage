const { Paragraph, Document, TextRun, Packer, ImageRun } = require('docx')
const fs = require('fs')
// add images: https://stackoverflow.com/questions/60829285/how-to-add-images-with-npm-docx-package-to-word-document

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun('Hello World'),
            new TextRun({
              text: 'Foo Bar',
              bold: true,
            }),
            new TextRun({
              text: 'Github is the best',
              bold: true,
            }),
            new ImageRun({
              data: fs.readFileSync('./src/assets/icon.png'),
              transformation: { width: 200, height: 200 },
            }),
          ],
        }),
        new Paragraph({
          children: [new TextRun('Now this is serious')],
        }),
      ],
    },
  ],
})

// Used to export the file into a .docx file
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('My Document.docx', buffer)
})
