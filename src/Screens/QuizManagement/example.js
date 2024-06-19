{data?.options.map((item, index) => (
    <div key={item.id} className="col-md-8 mb-4">
      <div className=" gap-2 d-flex">
        {" "}
        <FontAwesomeIcon
          type="btn"
          onClick={() => DeleteQuiz(item?.id)}
          icon={faTrash}
        ></FontAwesomeIcon>{" "}
        <FontAwesomeIcon
          onClick={() => EditQuiz(item?.id)}
          icon={faEdit}
          className="tableActionIcon"
        />
        <p className="secondaryText"> Question {index + 1} : </p>
        <p>{item.question} </p>
      </div>

      {["a", "b", "c", "d"].map((option, optIndex) => (
        <div key={optIndex} className="d-flex">
          <p className="secondaryText me-2">
            Option {option.toUpperCase()}:
          </p>
          <p>{item.options[optIndex].text}</p>
          {/* {item.options.map((qst, index) => (
            <p>{qst.text}</p>
          ))} */}
        </div>
      ))}

      <div className=" d-flex gap-3">
        {" "}
        <p className="secondaryText">Correct Option:</p>{" "}
        <p className="correctopction"> {item?.correct_option} </p>
      </div>
    </div>
  ))}
</div>