import { userDataStore } from '$lib/stores';
import { get } from '$lib/endpoint'


export default async function getSettings(settings: [string]) {
  // Pass in the settings you'd like to get as an array of strings
  return await get('userme', {
    'fields': settings
  }, userDataStore.readonce('token'));
}
