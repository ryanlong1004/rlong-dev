# Spotify Integration Setup

This document explains how to set up the Spotify "Now Playing" integration.

## Prerequisites

1. A Spotify account (Premium recommended for better API access)
2. Access to Netlify environment variables

## Setup Steps

### 1. Create a Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click "Create an App"
4. Fill in:
   - App name: "rlong.dev Portfolio"
   - App description: "Personal portfolio Spotify integration"
   - Redirect URI: `http://localhost:3000` (for testing)
5. Click "Create"
6. Note your **Client ID** and **Client Secret**

### 2. Get Authorization Code

1. Visit this URL (replace `YOUR_CLIENT_ID`):
```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-currently-playing
```

2. Authorize the app
3. You'll be redirected to `http://localhost:3000/?code=...`
4. Copy the `code` parameter from the URL

### 3. Get Refresh Token

Use this curl command (replace placeholders):

```bash
curl -X POST https://accounts.spotify.com/api/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code" \
  -d "code=YOUR_AUTHORIZATION_CODE" \
  -d "redirect_uri=http://localhost:3000" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET"
```

From the response, copy the `refresh_token` value.

### 4. Add Environment Variables to Netlify

In your Netlify dashboard:

1. Go to Site Settings → Environment Variables
2. Add these variables:
   - `SPOTIFY_CLIENT_ID`: Your Client ID
   - `SPOTIFY_CLIENT_SECRET`: Your Client Secret
   - `SPOTIFY_REFRESH_TOKEN`: Your Refresh Token

### 5. Deploy

The Spotify integration will now work in production!

## Local Development

For local testing:

1. Create a `.env` file in the project root:
```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

2. Install Netlify CLI: `npm install -g netlify-cli`
3. Run: `netlify dev`

## Troubleshooting

- **"Not listening right now"**: Make sure you're actively playing music on Spotify
- **API errors**: Check that environment variables are set correctly
- **Rate limiting**: Spotify API has rate limits; the component caches for 1 minute

## References

- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/)
- [Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization/)
