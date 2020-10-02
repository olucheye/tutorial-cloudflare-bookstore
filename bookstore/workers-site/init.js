// TODO: users collection for graph
const COLLECTIONS = [
  {
    name: 'BooksTable',
    data: [
      {
        author: 'J.K. Rowling',
        category: 'Fantasy',
        cover: 'url-here',
        _key: 'b1',
        name: "Harry Potter and the Sorcerer's Stone",
        price: 200,
        rating: 4.3,
      },
      {
        author: 'J.K. Rowling',
        category: 'Fantasy',
        cover: 'url-here',
        _key: 'b2',
        name: 'Harry Potter and the Chamber of Secrets',
        price: 200,
        rating: 4.3,
      },
      {
        author: 'J.K. Rowling',
        category: 'Fantasy',
        cover: 'url-here',
        _key: 'b3',
        name: 'Harry Potter and the Prisoner of Azkaban',
        price: 200,
        rating: 4.3,
      },
      {
        author: 'J.K. Rowling',
        category: 'Fantasy',
        cover: 'url-here',
        _key: 'b4',
        name: 'Harry Potter and the Goblet of Fire',
        price: 200,
        rating: 4.3,
      },
      {
        author: 'J.K. Rowling',
        category: 'Fantasy',
        cover: 'url-here',
        _key: 'b5',
        name: 'Harry Potter and the Order of the Phoenix',
        price: 200,
        rating: 4.3,
      },
      {
        author: 'J.K. Rowling',
        category: 'Fantasy',
        cover: 'url-here',
        _key: 'b6',
        name: 'Harry Potter and the Half-Blood Prince',
        price: 200,
        rating: 4.3,
      },
      {
        author: 'J.K. Rowling',
        category: 'Fantasy',
        cover: 'url-here',
        _key: 'b7',
        name: 'Harry Potter and the Deathly Hallows',
        price: 200,
        rating: 4.3,
      },
      {
        author: 'Paulo Coelho',
        category: 'Fiction',
        cover: 'url-here',
        _key: 'b8',
        name: 'The Alchemist',
        price: 200,
        rating: 4.3,
      },
    ],
  },
  { name: 'OrdersTable', data: [] },
  { name: 'CartTable', data: [] },
  { name: 'UsersTable', data: [] },
]

async function init(client) {
  for (collection of COLLECTIONS) {
    const { name, data } = collection
    const coll = client.collection(name)

    // TODO: remove once fixed from jsc8
    let exists = true
    try {
      const exists = await coll.exists()
    } catch (e) {
      exists = false
    }

    if (!exists) {
      await client.createCollection(name)
      console.log(`Collection ${name} created`)
      if (Array.isArray(data) && data.length)
        await client.insertDocumentMany(name, data)
      console.log(`Data inserted in ${name}`)
    } else {
      console.log(`Collection ${name} already exists. Skipping creation.`)
    }
  }
}

module.exports = init
