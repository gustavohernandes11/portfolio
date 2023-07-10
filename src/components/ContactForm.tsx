import styled from "styled-components";

export const ContactForm = () => {
    return (
        <StyledContactForm data-netlify="true">
            <SmallSpan>
                <Label htmlFor="name-input">Nome</Label>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name-input"
                    id="name-input"
                />
            </SmallSpan>
            <SmallSpan>
                <Label htmlFor="email-input">Email</Label>
                <Input
                    type="email"
                    placeholder="@gmail.com"
                    name="email-input"
                    id="email-input"
                />
            </SmallSpan>
            <LargeSpan>
                <Label htmlFor="message-input">Mensagem</Label>
                <Textarea
                    name="message-input"
                    placeholder="Hello World!"
                    id="message-input"
                />
            </LargeSpan>
            <ButtonSpan>
                <Button type="submit">Enviar</Button>
            </ButtonSpan>
        </StyledContactForm>
    );
};

const StyledContactForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`;
const LargeSpan = styled.span`
    grid-column: span 2;
`;
const SmallSpan = styled.span`
    grid-column: span 1;
`;
const ButtonSpan = styled(LargeSpan)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const Input = styled.input`
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: white;
    border: 1px solid #e4e4e4;
    width: 100%;
`;

const Textarea = styled.textarea`
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: white;
    border: 1px solid #e4e4e4;
    width: 100%;

    resize: vertical;
    min-height: 4rem;
    max-height: 14rem;
`;

const Button = styled.button`
    background-color: black;
    color: white;
    cursor: pointer;
    padding: 1rem;
    border-radius: 0.25rem;
    border: none;

    :hover {
        background-color: #161616;
    }
`;
