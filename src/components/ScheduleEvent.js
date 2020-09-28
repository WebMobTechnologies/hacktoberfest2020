import React from "react"
import Line from "./Line"

const agenda = [
  {
    time: "10:00 AM - 10:15 AM",
    desc: "Welcome note 📝",
  },
  {
    time: "10:15 AM - 10:30 AM",
    desc: "Intro to Hacktoberfest and GIT 🔥",
  },
  {
    time: "10:30 AM - 11:30 AM",
    desc: "3D basic, Model, Texture, Lighting, Scene - Workshop 🛠",
  },
  {
    time: "11:30 AM - 01:30 PM",
    desc: "Hand on 1st PR 👆",
  },
  {
    time: "01:30 PM - 02:30 PM",
    desc: "Lunch is early, huh? 🍜",
    type: "break",
  },
  {
    time: "02:30 PM - 03:00 PM",
    desc: "Talk #1",
  },
  {
    time: "03:00 PM - 04:00 PM",
    desc: " Live Quiz ❓",
    type: "fun",
  },
  {
    time: "04:00 PM - 04:30 PM",
    desc: "Talk #2",
  },
  {
    time: "04:30 PM - 05:00 PM",
    desc: "It's a show time 🕒",
  },
  {
    time: "05:00 PM - 05:30 PM",
    desc: "Tea time ( team pairing & arrangement ) ☕",
    type: "break",
  },
  {
    time: "05:30 PM - 07:00 PM",
    desc: " I said play! 🎮",
    type: "fun",
  },
  {
    time: "07:00 PM - 07:15 PM",
    desc: " Photo session 📷",
    type: "fun",
  },
]

const ScheduleEvent = () => (
  <div>
    <Line />
    <h2 className="title is-2 is-spaced">Agenda</h2>
    <table className="event-schedule">
      <tbody>
        {agenda.map(i => (
          <tr className={i.type}>
            <td className="time">{i.time}</td>
            <td className="desc">{i.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <br />
    <p>
      We aim to keep everyone informed and will give timely notice in case
      anything changes
    </p>
  </div>
)

export default ScheduleEvent
