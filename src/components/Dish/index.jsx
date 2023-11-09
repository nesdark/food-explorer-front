import { Container, Favorite, Quantity } from './styles';
import { Button } from '../Button';

export function Dish({ imgSource, name, description, price }) {
  return (
    <Container>
      <Favorite>
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6997 23.4256L23.0754 13.1996C25.3788 10.6747 25.7145 6.54645 23.5384 3.90789C22.9926 3.24297 22.3283 2.70638 21.586 2.33093C20.8437 1.95547 20.0391 1.74903 19.2211 1.72422C18.4032 1.6994 17.5893 1.85674 16.829 2.18661C16.0687 2.51648 15.3781 3.01196 14.7993 3.64278L13.0399 5.57435L11.5236 3.90789C9.2086 1.39558 5.4236 1.02947 3.00443 3.40291C2.39479 3.99814 1.90282 4.7227 1.55859 5.53231C1.21435 6.34192 1.02508 7.21958 1.00233 8.11167C0.979577 9.00376 1.12383 9.89154 1.42627 10.7208C1.72872 11.55 2.183 12.3033 2.76136 12.9345L12.3801 23.4256C12.5557 23.6153 12.7928 23.7217 13.0399 23.7217C13.287 23.7217 13.5241 23.6153 13.6997 23.4256Z"
            stroke="#E1E1E6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Favorite>

      <img src={`../../../public/${imgSource}.png`} alt="Foto do prato" />

      <h3>
        <button>{name} &gt;</button>
      </h3>

      <p>{description}</p>

      <strong id="price">R$ {price}</strong>
      <div>
        <Quantity>
          <button id="lessQuantity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 13C4 12.4477 4.33579 12 4.75 12H21.25C21.6642 12 22 12.4477 22 13C22 13.5523 21.6642 14 21.25 14H4.75C4.33579 14 4 13.5523 4 13Z"
                fill="white"
              />
            </svg>
          </button>

          <p>01</p>

          <button id="moreQuantity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 13C4 12.5858 4.33579 12.25 4.75 12.25H21.25C21.6642 12.25 22 12.5858 22 13C22 13.4142 21.6642 13.75 21.25 13.75H4.75C4.33579 13.75 4 13.4142 4 13Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 4C13.4142 4 13.75 4.33579 13.75 4.75V21.25C13.75 21.6642 13.4142 22 13 22C12.5858 22 12.25 21.6642 12.25 21.25V4.75C12.25 4.33579 12.5858 4 13 4Z"
                fill="white"
              />
            </svg>
          </button>
        </Quantity>
        <Button title="incluir" />
      </div>
    </Container>
  );
}
