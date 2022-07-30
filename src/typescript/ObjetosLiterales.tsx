import { NumericLiteral } from "typescript";


interface Persona{
    nombreCompleto : String;
    edad : Number;
    direccion: Direccion

}

interface Direccion{
        
    pais: String;
    CasaNo: Number;
    
}



export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'JC',
        edad: 28,
        direccion:{
            pais: 'Mexico',
            CasaNo: 6345
        }

    }



    return(
  <>
    <h3>Objetos Literales</h3>
    <code>
        <pre>
        {JSON.stringify(persona, null, 2)}
        </pre>
    </code>
  </>
    )
}
