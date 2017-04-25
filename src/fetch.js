import 'whatwg-fetch'

export const get = async ({ url, body, success, failure }) => {
  try {

    console.log('ASYNC_GET: fetching data')
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer fOdyeC4uPQX7mVDHRsNrucB4rE0pouwzbZBxVC1KfybFzmYmuDgAq6GKF99wmngSmOcIAEw_0AHkMRuTBcYiP9C0gVxQoT_-ZjqXXkXbAjVGTHQOe49JQfyWU3bnvEYJA_CkeJoXjWgDzAYcCcV3qTp-TarABRP23FfMnlZ4gQ39Tq99omhUgWmZzp3-uku5lUqQl4Lbe-vUvhyI2VWXF4hGL1kDsFntJSWCV9uPu2ggubzZied85vKtZpumoGn9nXaVRqQWSWSRex5TsWfsCxwtSMQEViHZS-jEG1QOTAW1eI-PZfrnIApfBzB61KlZdZ0xcUz29Jtm_SXM2F8gllqvj9k64cI8XMMwiHQnbnparN5hNcYfPnyZ6Do4shGfEbES8u7SKjFBkBW3j0dRoy32EKCLSn3jWH-jenvudqRwJjeGbFqSn_F3XzADFGmI'
      }
    })

    console.log('ASYNC_GET: await res.json')
    const data = await res.json()
    console.log('ASYNC_GET: after await res.json')
    console.log('dispatch: ' + success + ': ' + data)

  } catch (e) {
    console.log('dispatch: ' + failure)
  }
}

export const syncGet = ({ url, body, success, failure }) => {
  try {

    console.log('SYN_GET: fetching data')
    const res = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer fOdyeC4uPQX7mVDHRsNrucB4rE0pouwzbZBxVC1KfybFzmYmuDgAq6GKF99wmngSmOcIAEw_0AHkMRuTBcYiP9C0gVxQoT_-ZjqXXkXbAjVGTHQOe49JQfyWU3bnvEYJA_CkeJoXjWgDzAYcCcV3qTp-TarABRP23FfMnlZ4gQ39Tq99omhUgWmZzp3-uku5lUqQl4Lbe-vUvhyI2VWXF4hGL1kDsFntJSWCV9uPu2ggubzZied85vKtZpumoGn9nXaVRqQWSWSRex5TsWfsCxwtSMQEViHZS-jEG1QOTAW1eI-PZfrnIApfBzB61KlZdZ0xcUz29Jtm_SXM2F8gllqvj9k64cI8XMMwiHQnbnparN5hNcYfPnyZ6Do4shGfEbES8u7SKjFBkBW3j0dRoy32EKCLSn3jWH-jenvudqRwJjeGbFqSn_F3XzADFGmI'
      }
    })

    console.log('SYN_GET: res.json')
    const data = res.json()
    console.log('SYN_GET: after res.json')
    console.log('dispatch: ' + success + ': ' + data)

    return data
  } catch (e) {
    console.log('dispatch: ' + failure)
  }
}
