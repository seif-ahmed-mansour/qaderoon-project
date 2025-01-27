import Button from "../Button";
import "./card.css";

function Card(props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl">
      <a href="#" className="overflow-hidden block">
        <img
          className="rounded-t-lg card-images hover:scale-105 ease-in duration-200"
          src={props.image}
          alt=""
        />
      </a>
      <div className="p-5 text-center">
        <h1 className="mb-3 text-xl break-words my-2">{props.description}</h1>
        <Button>
          إقرأ المزيد
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Card;
