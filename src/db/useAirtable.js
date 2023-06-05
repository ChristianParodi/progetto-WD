import Airtable from 'airtable'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: import.meta.env.VITE_AIRTABLE_API_KEY
});

const base = Airtable.base('appSR0zVLTNb5c0yx');

export default base;