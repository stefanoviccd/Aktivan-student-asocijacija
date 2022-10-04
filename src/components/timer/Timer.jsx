import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, useRef, useEffect } from 'react'
import "./timer.css"


const Timer = (props) => {
	

	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');
	const[timesUp, setTimesUp]=useState(false);


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimerWithoutDialog = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}

	}

	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
		else{

				setTimesUp(true)
			
		}
	}
	const resetTimer = (e) => {
		setTimesUp(false)
		props.removeConfettes(e)

		setTimer('00:02:00');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimerWithoutDialog(e);
		}, 1000)
		Ref.current = id;
		props.resetFields()
	}
	useEffect(() => {
		if(props.isWinner==true)
		clearTimer()
	  }, [props.isWinner]);

	const clearTimer = (e) => {
		setTimesUp(false)

		setTimer('00:02:00');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		deadline.setSeconds(deadline.getSeconds() + 120);
		return deadline;
	}


	const onClickReset = (e) => {
		props.startGame(e)
		clearTimer(getDeadTime());
	}

	return (
		<><div className="App">
            <h2>{timer} <button className='timer-btn' onClick={(e)=>onClickReset(e)}>Započni igru</button>
            </h2>
            <button className='reset-timer-btn' onClick={resetTimer}>Resetuj</button>
			
		</div>
		{timesUp && props.getShowDialog() ? <div className='timesUp'>Vreme je isteklo :(</div> : <></>} </>
		
	
	)
}

export default Timer;
