
export const TiposBasicos = () => {

    const nombre = "Juan Carlos"
    const edad = 28;
    const estaActivo:boolean = true;
    
    const poderes:string[] = ['Velocidad','Volar','Respirar En El Agua'];

  return (
    <>
    <h3>Tipos Basicos</h3>
    {nombre}, { edad} - { (estaActivo) ? 'Prendido' : 'no activo'}
    <br/>
    {poderes.join(',')}
    </>
  )
}
