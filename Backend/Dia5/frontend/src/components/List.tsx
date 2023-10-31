
type Item = {
  name: string
  image: string
}

type Props<T extends Item> = {
  items: T[]
}

const List = <T extends Item>({items}: Props<T>) => {
  if(!items.length) return (<p>Nenhum item encontrado</p>)

  return (
    <ul className='list'>
      {
        items.map((item) => (
          <li key={item.name}>
            <p>{item.name}</p>
            <img src={item.image} alt={item.name} />
          </li>
        ))
      }
    </ul>
  )
}

export default List