addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'POST' && new URL(request.url).pathname === '/api/tts') {
    const { model, voice, input } = await request.json()

    const ttsResponse = await fetch('https://burn.hair/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TTS_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ model, voice, input })
    })

    if (!ttsResponse.ok) {
      return new Response('Error calling TTS API', { status: ttsResponse.status })
    }

    const audioBuffer = await ttsResponse.arrayBuffer()
    return new Response(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg'
      }
    })
  }

  return new Response('Not Found', { status: 404 })
}
