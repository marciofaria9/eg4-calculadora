import { ButtonContainer, ButtonContainerDown, Input } from "./components/styles"
import { Button, ButtonGrenn, ButtonRed, ContainerCalc, Header } from "./styles"
import seta from './assets/seta.svg';


export const Calculator = () => {
  return (
    <>
      <ContainerCalc>
        <Header>
          Calculadora Univas
        </Header>

        <Input>

        </Input>
        <ButtonContainer>

            <Button> + </Button>
            <Button> - </Button>
            <Button> X </Button>
            <Button> / </Button>
            
            <Button> 7 </Button>
            <Button> 8 </Button>
            <Button> 9 </Button>
            <ButtonRed><img src={seta} alt='seta' /></ButtonRed>

            <Button> 4 </Button>
            <Button> 5 </Button>
            <Button> 6 </Button>
            <ButtonGrenn> = </ButtonGrenn>

            <Button> 1 </Button>
            <Button> 2 </Button>
            <Button> 3 </Button>
            <Button /> 

            <Button> 0 </Button>
            <Button> , </Button>
            <ButtonRed> CE </ButtonRed>
            <Button /> 
        </ButtonContainer>

      </ContainerCalc>
    </>
  )
}