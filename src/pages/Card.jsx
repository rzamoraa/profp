function Card({ncasa, dircasa, contcasa, foto}) {
  const nombre = ncasa;
  const direccion =dircasa
  const contacto  =contcasa
  const fotografia = foto
  return (

    <div className=" bg-red-700 h-full w-full  rounded-[5px]">
      <div>propiedad </div>
      <div>{nombre}</div>
      <div>{direccion}</div>
      <div>{contacto}</div>
      <img
      src={fotografia}
      >

      </img>
      
   
    </div>
  );
}

export default Card;
