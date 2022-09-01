import Title from "../components/Title"
import Text from "../components/Text"

const NotFound = () => {
  return (
    <div className="bg-black flex  flex-col justify-center items-center h h-screen">
      <Title text="404 ERROR"/>
      <Text text="no se encontro la pagina buscada" span="   :("/>
    </div>
  )
}

export default NotFound