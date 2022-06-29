const storage = useStorage('cms')
import mockData from '~/utils/mockData'

export default defineEventHandler(async () => {
  const itemsKeys = await storage.getKeys('items')

  if (!itemsKeys.length) {
    console.log('Adding mock data')
    await Promise.all(mockData.map((data, index) => storage.setItem("items:" + index, data)))
  }

  const itemsP = itemsKeys.map(key => storage.getItem(key).then(item => item.body))

  const items = await Promise.all(itemsP)

  return items
})