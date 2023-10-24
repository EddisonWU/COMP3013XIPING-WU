import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import type { ChangeEventHandler } from "react";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { DayPicker } from "react-day-picker";

export function Header(props: any) {
  const { text, setText, selectedList, setSelectedList } = props;

  const [selectedDay, setSelectedDay] = useState<Date>();
  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
    setVis(false);
  };
  const showDatePicker: ChangeEventHandler<any> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setVis(true);
  };

  const createinfor: ChangeEventHandler<any> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!text) {
      return;
    }
    const newRecord = {
      text,
      isDeleted: false,
      isCompleted: false,
      isSelected: false,
      // if selected then use selected date otherwise use today
      dueDate: selectedDay ? selectedDay : new Date(),
    };
    const prevList = [...(selectedList ?? [])];
    setSelectedList([newRecord, ...prevList]);
  };
  const value = text;
  const onChange: ChangeEventHandler<any> = (e) => {
    // console.log('Header: onChange, ', e);
    setText(e.target?.value);
  };

  const [vis, setVis] = useState(false); // datepciker visible

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          value={value}
          onChange={onChange}
          placeholder="Add a new assignment"
          type="text"
        />
        <button onClick={showDatePicker}>
          <BsFillCalendar3WeekFill size={20} />
        </button>

        <button onClick={createinfor}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
        {!vis ? null : (
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                background: "black",
                right: "50px",
              }}
            >
              <DayPicker
                mode="single"
                selected={new Date()}
                onDayClick={handleDayClick}
                footer={<p>this is footer</p>}
                pagedNavigation
                showOutsideDays
              />
            </div>
          </div>
        )}
      </form>
    </header>
  );
}
