import SafeEnviroment from "ui/components/feedbacks/SafeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextField from "ui/components/inputs/TextField";

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade."
        }
      />

      <TextField label={"Digite seu CEP"} fullWidth />

      <UserInformation
        name={"Deivid Santos"}
        picture={"https://github.com/deividss23.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
