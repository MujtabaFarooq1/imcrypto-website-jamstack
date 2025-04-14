import BigNumber from "bignumber.js";
import React from "react";
import "./sacrificeMultiChain.scss";

const SacrificeMultiCHain = ({
  totalAmount,
  walletAddress,
  currentAmountSacrificed,
  firstCreaditSacrificed,
}) => {
  const DAY = 1000 * 60 * 60 * 24;
  const [totalSacrificedValue, setTotalSacrificeValue] = React.useState(0.0);
  const [timerString, setTimerString] = React.useState("");
  const [sacrificeStarted, setSacrificeStarted] = React.useState(false);
  const [sacrificeEnded, setSacrificeEnded] = React.useState(false);
  const [sacrificeAddressToShow, setSacrificeAddressToShow] =
    React.useState("");

  // -------------------------------------------------

  React.useEffect(() => {
    timeCounter(setTimerString);
  }, []);

  React.useEffect(() => {
    setSacrificeAddressToShow(walletAddress);
    setTotalSacrificeValue(totalAmount);
  }, [totalAmount, walletAddress]);

  //---------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------
  const parseDateParts = (targetTime) => {
    const total = targetTime - Date.parse(new Date());
    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    seconds = seconds > 0 ? seconds : 0;
    minutes = minutes > 0 ? minutes : 0;
    hours = hours > 0 ? hours : 0;
    days = days > 0 ? days : 0;
    return {
      seconds,
      minutes,
      hours,
      days,
    }
  }

  const partsToHumanReadable = (dateParts) => (
    `${fixZeroToLeft(dateParts.days)}:${fixZeroToLeft(dateParts.hours)}:${fixZeroToLeft(
      dateParts.minutes
    )}:${fixZeroToLeft(dateParts.seconds)}`
  )

  const timeCounter = () => {
    const frame = () => {
      const startTime = new Date("2022-11-30T00:00:00Z");
      const endTime = new Date(+startTime + (30 * DAY));
      const now = new Date()
      if (startTime > now) {
        const dateParts = parseDateParts(startTime)
        setTimerString(partsToHumanReadable(dateParts));
        setSacrificeStarted(false);
        setSacrificeEnded(false);
      } else if (endTime > now) {
        const dateParts = parseDateParts(endTime);
        setTimerString(partsToHumanReadable(dateParts));
        setSacrificeStarted(true);
        setSacrificeEnded(false);
      } else {
        setSacrificeStarted(true);
        setSacrificeEnded(true);
        setTimerString("00:00:00:00");
        return
      }
      animationFrameId = requestAnimationFrame(frame);
    }

    let animationFrameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animationFrameId);
      setTimerString("00:00:00:00");
    };
  };

  const fixZeroToLeft = (val) => `0${val}`.slice(-2);

  //---------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------

  return (
    <div className="scrifice_multiChain_section">
      <div className="multiChain_calculation">
        <h1 className="multiChain_time">{timerString}</h1>

        <h3 className="multiChain_address">
          {sacrificeStarted ? (
            <>{sacrificeAddressToShow}</>
          ) : (
            "Sacrifice address will display when timer hits 00:00:00:00"
          )}
        </h3>
        <div className="multiChain_amount row">
          <div className="lg-col-6 md-col-12 sm-col-12 pd-0 ">
            <div className="amount_one">
              <p className="amount_one_text">
                Current Amount
                <br /> Sacrificed
              </p>
              <p className="amount_one_value">${currentAmountSacrificed}</p>
            </div>
          </div>

          <div className="lg-col-6 md-col-12 sm-col-12 pd-0 ">
            <div className="amount_two">
              <p className="amount_two_text">
                Credit for First
                <br /> Sacrifice
              </p>
              <p className="amount_two_value">${firstCreaditSacrificed}</p>
            </div>
          </div>
        </div>
        <div className="multiChain_result">
          <p className="text">
            Total Sacrificed
            <br /> Value
          </p>
          <p className="value">${totalSacrificedValue}</p>
        </div>
      </div>
    </div>
  );
};

export default SacrificeMultiCHain;
