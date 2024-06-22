export async function onRequestPost(context) {
  const { request, env } = context;
  const { model, voice, input } = await request.json();

  const ttsResponse = await fetch('https://burn.hair/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.TTS_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ model, voice, input })
  });

  if (!ttsResponse.ok) {
    return new Response('Error calling TTS API', { status: ttsResponse.status });
  }

  const audioBuffer = await ttsResponse.arrayBuffer();
  return new Response(audioBuffer, {
    headers: {
      'Content-Type': 'audio/mpeg'
    }
  });
}
