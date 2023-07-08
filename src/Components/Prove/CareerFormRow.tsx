import React, { useCallback, useRef } from "react";
import { careerInfo } from "../../routes/ProvePage";

interface CareerFormRowProps {
  index: number;
  onChange: React.Dispatch<React.SetStateAction<careerInfo[]>>;
}

const CareerFormRow: React.FC<CareerFormRowProps> = React.memo(
  ({ index, onChange }) => {
    const startYearRef = useRef(null);
    const startMonthRef = useRef(null);
    const startDayRef = useRef(null);
    const endYearRef = useRef(null);
    const endMonthRef = useRef(null);
    const endDayRef = useRef(null);

    const inputHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange((state) => {
          const newState = [...state];
          if (
            event.target.name === "name" ||
            event.target.name === "position" ||
            event.target.name === "detail"
          ) {
            newState[index][event.target.name] = event.target.value;
          }
          console.log(newState);
          return newState;
        });
      },
      [index, onChange]
    );

    const dateChangeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange((state) => {
          const newState = [...state];
          if (
            event.target.name.includes("start") &&
            startYearRef.current != null &&
            startMonthRef.current &&
            startDayRef.current
          ) {
            newState[index]["startDate"] = new Date(
              +(startYearRef.current as HTMLInputElement).value,
              +(startMonthRef.current as HTMLInputElement).value - 1,
              +(startDayRef.current as HTMLInputElement).value
            );
          }
          if (
            event.target.name.includes("end") &&
            endYearRef.current != null &&
            endMonthRef.current &&
            endDayRef.current
          ) {
            newState[index]["endDate"] = new Date(
              +(endYearRef.current as HTMLInputElement).value,
              +(endMonthRef.current as HTMLInputElement).value - 1,
              +(endDayRef.current as HTMLInputElement).value
            );
          }
          console.log(newState);
          return newState;
        });
      },
      [onChange, index]
    );

    return (
      <tr>
        <th>
          <input name="name" placeholder="기관명" onChange={inputHandler} />
        </th>
        <th>
          <input name="position" placeholder="직책" onChange={inputHandler} />
        </th>
        <th>
          <input
            type="number"
            name="startDateYear"
            ref={startYearRef}
            onChange={dateChangeHandler}
          />
          <span>.</span>
          <input
            type="number"
            name="startDateMonth"
            ref={startMonthRef}
            onChange={dateChangeHandler}
          />
          <span>.</span>
          <input
            type="number"
            name="startDateDay"
            ref={startDayRef}
            onChange={dateChangeHandler}
          />
          <span>~</span>
          <input
            type="number"
            name="endDateYear"
            ref={endYearRef}
            onChange={dateChangeHandler}
          />
          <span>.</span>
          <input
            type="number"
            name="endDateMonth"
            ref={endMonthRef}
            onChange={dateChangeHandler}
          />
          <span>.</span>
          <input
            type="number"
            name="endDateDay"
            ref={endDayRef}
            onChange={dateChangeHandler}
          />
        </th>
        <th>
          <input name="detail" placeholder="세부사항" onChange={inputHandler} />
        </th>
      </tr>
    );
  }
);

export default CareerFormRow;
