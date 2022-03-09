import React, { useState } from "react";

function Testing() {
  const [music, setMusic] = useState({
    tiles: [],
    filtered: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { tiles } = music;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setMusic({
        tiles: [...tiles, value],
        filtered: [...tiles, value],
      });
    }

    // Case 2 : The user unchecks the box
    else {
      setMusic({
        tiles: tiles.filter((e) => e !== value),
        filtered: tiles.filter((e) => e !== value),
      });
    }
  };

  return (
    <>
      <div>
        <div>
          <h3> Check Music</h3>

          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    type="checkbox"
                    name="tiles"
                    value="Rock"
                    id="multiCheckbox"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Rock
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="tiles"
                    value="Pop"
                    id="multiCheckbox"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Pop
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="tiles"
                    value="Jazz"
                    id="multiCheckbox"
                    onChange={handleChange}
                  />
                  <label>Jazz</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="tiles"
                    value="Disco"
                    id="multiCheckbox"
                    onChange={handleChange}
                  />
                  <label>Disco</label>
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="checkbox"
                    name="tiles"
                    value="Vinyl"
                    id="multiCheckbox"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Vinyl
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="tiles"
                    value="CD"
                    id="multiCheckbox"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    CD
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="tiles"
                    value="Digital"
                    id="multiCheckbox"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Digital
                  </label>
                </div>
              </div>
            </div>

            <div className="form-floating mt-3 mb-3 text-center">
              <label htmlFor="exampleFormControlTextarea1">
                You have selected following music types
              </label>
              <textarea
                className="form-control text"
                name="filtered"
                value={music.filtered}
                placeholder="The checkbox values will be displayed here "
                id="floatingTextarea2"
                style={{ height: "150px" }}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Testing;
