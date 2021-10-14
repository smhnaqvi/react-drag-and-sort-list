import React, { useRef, useState } from "react";
import Modal from "react-modal";
import useList from "../../store/List.Hook";

Modal.setAppElement("#root");

function AddToList() {
  // useList to use context methods
  const { get, save } = useList();

  // manage closing or opening modal
  const [modalIsOpen, setIsOpen] = useState(false);

  // inital form data as empty
  const [form, setForm] = useState({
    title: "",
    description: "",
    keywords: [],
    country: "",
    workingType: "",
    icon: ""
  });

  // handelModal for close and open modal
  const handelModal = () => {
    setIsOpen(!modalIsOpen);
  };

  // submit form and appent job details into list
  const createJobOffer = (event) => {
    event.preventDefault();

    // check form value quickly
    if (form.title === "") return;
    if (form.description === "") return;
    if (form.country === "") return;
    if (form.workingType === "") return;
    if (form.keywords.length === 0) return;
    if (form.icon === "") return;

    // let a = list.get();
    let currentList = get();
    currentList.push(form);

    // save
    save(currentList);
    handelModal();
  };

  // return only unique on keywords array
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  // add new keyword into form and clear input
  const addTag = () => {
    let tags = form.keywords;
    tags.push(tagInput.current.value);
    let uniqueTags = tags.filter(onlyUnique);
    setForm({ ...form, keywords: uniqueTags });
    tagInput.current.value = "";
  };

  // keyword input ref for access input value
  const tagInput = useRef(null);

  // read input file and show image previwe
  const selectIcon = (event) => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function () {
      setForm({ ...form, icon: reader.result });
    };
  };

  return (
    <React.Fragment>
      <button onClick={handelModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} className="content" overlayClassName="modal">
        <form onSubmit={createJobOffer} className={"create-job-offer"}>
          {/* form inputs */}
          <div className={"form-inputs"}>
            {/* job title */}
            <div>
              <label>title</label>
              <input
                onChange={(event) =>
                  setForm({ ...form, title: event.target.value })
                }
                type="text"
                value={form.title}
              />
            </div>

            {/* job description */}
            <div>
              <label>description</label>
              <input
                onChange={(event) =>
                  setForm({ ...form, description: event.target.value })
                }
                type="text"
                value={form.description}
              />
            </div>

            {/* select icon for job  */}
            <div>
              <label>icon</label>
              <input type="file" accept="image/*" onChange={selectIcon} />
              <img className={"icon"} src={form.icon} alt={form.title} />
            </div>

            {/* add job tags */}
            <div>
              <label>tags</label>
              <input type="text" ref={tagInput} />
              <span onClick={addTag}>+add</span>
              <div className={"selected-tags"}>
                {form.keywords.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>

            {/* select job country */}
            <div>
              <label>country</label>
              <select
                onChange={(event) =>
                  setForm({ ...form, country: event.target.value })
                }
                value={form.country}
              >
                <option selected value={"iran"}>
                  iran
                </option>
                <option value={"iraq"}>iraq</option>
                <option value={"pakistan"}>pakistan</option>
              </select>
            </div>

            {/* select job type */}
            <div>
              <label>job type</label>
              <select
                onChange={(event) =>
                  setForm({ ...form, workingType: event.target.value })
                }
                value={form.workingType}
              >
                <option selected value={"Part-time"}>
                  Part-time
                </option>
                <option value={"Full-time"}>Full-time</option>
                <option value={"Flexible hours"}>Flexible hours</option>
              </select>
            </div>
          </div>

          {/* form action buttons */}
          <div className={"form-actions"}>
            {/* clear form and close modal */}
            <button onClick={handelModal} className={"btn"} type={"reset"}>
              cancle
            </button>

            {/* submit form and add job information in list */}
            <button className={"btn"} type={"submit"}>
              submit
            </button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
}

export default AddToList;
