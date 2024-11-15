import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";

export default function ProfessionalInfo({
  data,
  handleInput,
  index = 0,
  handleRemoveInputSection,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {!isCollapsed ? (
        <>
          <button
            className="collapseSectionBtn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            Hide
          </button>
          <TextInput
            id="company_name"
            label={"Company Name"}
            type="text"
            placeholder="Enter the company's name"
            onChange={(e) =>
              handleInput(
                "professionalInfo",
                "company_name",
                e.target.value,
                index
              )
            }
            value={data?.professionalInfo[index]?.company_name}
          />

          <TextInput
            id="job_position"
            label={"Work Position/Title"}
            type="text"
            placeholder="Enter your job title"
            onChange={(e) =>
              handleInput(
                "professionalInfo",
                "job_position",
                e.target.value,
                index
              )
            }
            value={data?.professionalInfo[index]?.job_position}
          />

          <TextInput
            id="company_location"
            label={"Location"}
            type="text"
            placeholder="Enter the company's location"
            onChange={(e) =>
              handleInput(
                "professionalInfo",
                "company_location",
                e.target.value,
                index
              )
            }
            value={data?.professionalInfo[index]?.company_location}
          />

          {/* <div className="rowInputs"> */}
          <TextInput
            id="job_start_date"
            className="calendar"
            label={"Start Date"}
            type="text"
            placeholder="Enter the start date"
            onChange={(e) =>
              handleInput(
                "professionalInfo",
                "job_start_date",
                e.target.value,
                index
              )
            }
            value={data?.professionalInfo[index]?.job_start_date}
          />

          <TextInput
            id="job_end_date"
            className="calendar"
            label={"End Date"}
            type="text"
            placeholder="Enter the end date"
            onChange={(e) =>
              handleInput(
                "professionalInfo",
                "job_end_date",
                e.target.value,
                index
              )
            }
            value={data?.professionalInfo[index]?.job_end_date}
          />
          {/* </div> */}

          <label htmlFor="job_responsibilities">Job Responsibilities</label>
          <textarea
            id="job_responsibilities"
            rows={7}
            cols={50}
            placeholder="Enter your job responsibilities"
            onChange={(e) =>
              handleInput(
                "professionalInfo",
                "job_responsibilities",
                e.target.value,
                index
              )
            }
            value={data?.professionalInfo[index]?.job_responsibilities}
          />
          <button
            className="removeSectionBtn"
            key={index}
            onClick={handleRemoveInputSection}
          >
            Remove
          </button>
        </>
      ) : (
        <div className="expandBtnWrapper">
          <p
            className={
              data?.professionalInfo[index]?.company_name
                ? "sectionCollapseHeader"
                : "sectionCollapsePlaceholder"
            }
          >
            {data?.professionalInfo[index]?.company_name ||
              "Enter your company name"}
          </p>
          <button
            className="expandSectionBtn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            Show
          </button>
        </div>
      )}
    </>
  );
}
