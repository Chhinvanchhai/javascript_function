exports.timeContDown = () => {
  let time = ''
    const today = new Date();
    const finalDate = moment(deal.value.created_at).add(
      deal.value.time_period,
      "hours"
    );
    const diffTime = Math.abs(finalDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let days = diffDays;
    let hours = 0;
    let minutes = 0;
    let seconds = 1;
    let timer = setInterval(function () {
      seconds--;
      if (seconds < 0 && minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (minutes === 0 && seconds === 0 && hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else if (hours === 0 && minutes === 0 && seconds === 0 && days > 0) {
        days--;
        hours = 23;
        minutes = 59;
        seconds = 59;
      }
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
      }
      time = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }, 1000);

    return time
}