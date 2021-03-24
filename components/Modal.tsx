export default function Modal({ toggle, show }) {
  return (
    <div className="backdrop" onClick={(e) => toggle(e)}>
      <div className="modal">Add lost dog</div>
      <style jsx>
        {`
          .backdrop {
            position: fixed;
            display: ${show ? "flex" : "none"};
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            z-index: 999;
            top: 0;
            left: 0;
          }

          .modal {
            max-width: 700px;
            max-height: 500px;
            background: white;
          }
        `}
      </style>
    </div>
  );
}
