import { StyledForm, StyledInput } from "./styles";

export default function FormCardBank({
  name,
  setName,
  numberCard,
  setNumberCard,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCVC,
}) {
  const nameTest = name;

  const numberCardTest = numberCard;
  const setNumberCardTest = setNumberCard;

  return (
    <StyledForm>
      <label htmlFor="name">
        Nome do cartão: <br />
        <StyledInput
          type="text"
          id="name"
          maxLength={32}
          minLength={16}
          placeholder="Digite o nome do titular do cartão"
          onChange={(e) => setName(e.target.value)}
          value={nameTest}
        />
      </label>

      <label htmlFor="number-card">
        Número do cartão: <br />
        <StyledInput
          type="text"
          id="number-card"
          placeholder="Digite o número do cartão"
          onChange={(e) => setNumberCardTest(e.target.value)}
          value={numberCardTest}
        />
      </label>

      <div>
        <label htmlFor="month-year">
          Data: <br />
          <div>
            <StyledInput
              type="number"
              id="month-year"
              placeholder="MM"
              onChange={(e) => setMonth(e.target.value)}
              value={month}
            />
            <StyledInput
              type="number"
              id="month-year"
              placeholder="YY"
              onChange={(e) => setYear(e.target.value)}
              value={year}
            />
          </div>
        </label>

        <label htmlFor="cvc-number">
          CVC: <br />
          <StyledInput
            type="number"
            id="cvc-number"
            placeholder="***"
            onChange={(e) => setCVC(e.target.value)}
            value={cvc}
          />
        </label>
      </div>
      <button>Confirmar</button>
    </StyledForm>
  );
}
