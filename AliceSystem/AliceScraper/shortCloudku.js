const axios =  require('axios')
 
async function shortCloudku(originalUrl, customCode = null) {
  if (!originalUrl) throw new Error('link ga boleh kosong')
 
  const timestamp = Math.floor(Date.now() / 1000)
  const custom = customCode || Math.floor(100000 + Math.random() * 900000).toString() 
 
  const payload = {
    url: originalUrl,
    custom,
    timestamp
  }
 
  const headers = {
    'Content-Type': 'application/json',
    'Origin': 'https://cloudku.click',
    'Referer': 'https://cloudku.click/',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
 
  try {
    const { data } = await axios.post('https://cloudku.click/api/link.php', payload, { headers })
 
    if (!data.success) throw new Error('Gagal membuat shortlink: ' + JSON.stringify(data))
 
    return {
      status: true,
      shortUrl: data.data.shortUrl,
      originalUrl: data.data.originalUrl,
      key: data.data.key,
      created: data.data.created
    }
  } catch (err) {
    return {
      status: false,
      error: err.message || err
    }
  }
}

module.exports = { shortCloudku };