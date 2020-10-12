const crypto = require('crypto')

const encrypt = data => {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv('aes-256-ccm', Buffer.from(process.env.KEY_TO_CRYP), iv)
  let encrypted = cipher.update(data)
  encrypted = Buffer.concat([encrypted, cipher.final()])

  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted.toString('hex')
  }
}

const decrypt = data => {
  const iv = Buffer.from(data.iv, 'hex')
  const encryptedText = Buffer.from(data.encryptedData, 'hex')
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(process.env.KEY_TO_CRYP), iv)
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString()
}

module.exports = {
  encrypt,
  decrypt
}
