import styled from "styled-components";

export const Wrapper = styled.main`
    padding: 1.5rem;

    nav {
        display: flex;
        align-items: center;

        height: var(--nav-heigth);
        max-width: var(--max-width);
        margin: 0 auto;
        margin-bottom: 1rem;
        width: var(--fluid-width);

        img {
            width: 3rem;
        }
    }
`;