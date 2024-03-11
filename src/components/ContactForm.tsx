import styled from "styled-components";
import { Button } from "./Button";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    const searchParams = Object.fromEntries(formData) as Record<string, string>;
    const encodedSearchParams = new URLSearchParams(searchParams).toString();

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedSearchParams,
    })
        .then(() => {
            alert("Sua mensagem foi enviada! Obrigado.");
            myForm.reset();
        })
        .catch((error: Error) => alert(error));
};

export const ContactForm = () => {
    return (
        <StyledContactForm
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
        >
            <SmallSpan>
                <Input type="hidden" name="form-name" value="contact" />

                <Label htmlFor="name-input">Nome</Label>
                <Input
                    required
                    type="text"
                    minLength={3}
                    maxLength={300}
                    placeholder="Fulano de tal"
                    name="name-input"
                    id="name-input"
                />
            </SmallSpan>
            <SmallSpan>
                <Label htmlFor="email-input">Email</Label>
                <Input
                    required
                    type="email"
                    minLength={5}
                    maxLength={50}
                    pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                    placeholder="@gmail.com"
                    name="email-input"
                    id="email-input"
                />
            </SmallSpan>
            <LargeSpan>
                <Label htmlFor="message-input">Mensagem</Label>
                <Textarea
                    required
                    name="message-input"
                    minLength={10}
                    placeholder="Hello World!"
                    id="message-input"
                />
            </LargeSpan>
            <JustifyRight>
                <Button type="submit">Enviar</Button>
            </JustifyRight>
        </StyledContactForm>
    );
};

const StyledContactForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    font-size: 1rem;

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

    @media (max-width: 768px) {
        grid-column: span 2;
    }
`;
const JustifyRight = styled(LargeSpan)`
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
    min-width: 16rem;
`;

const Textarea = styled.textarea`
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: white;
    border: 1px solid #e4e4e4;
    width: 100%;
    min-width: 16rem;
    resize: vertical;
    min-height: 4rem;
    max-height: 14rem;
`;
