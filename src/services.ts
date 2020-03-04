/**
 * Calculate deployment date
 * @returns {string}
 */
export const calculateDeploymentDate = (): string => {
  const deployStamp = Number(process.env.DEPLOYMENT_TIMESTAMP) || null;
  if (!deployStamp || Number.isNaN(Number(deployStamp))) {
    return 'DEPLOYMENT_TIMESTAMP_NOT_PROVIDED';
  }
  return `${new Date(deployStamp * 1000)}`;
};

/**
 * Calculate server uptime
 * @returns {string}
 */
export const calculateUptime = (): string => {
  const seconds = Math.floor(process.uptime());
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // format the output
  const daysText = `${days} day${days !== 1 ? 's' : ''}`;
  const deltaHours = hours - (days * 24);
  const hoursText = `${deltaHours < 10
    ? '0'
    : ''}${deltaHours} hour${deltaHours !== 1
    ? 's'
    : ''}`;
  const deltaMinutes = minutes - (hours * 60);
  const minutesText = `${deltaMinutes < 10
    ? '0'
    : ''}${deltaMinutes} minute${deltaMinutes !== 1
    ? 's'
    : ''}`;
  const deltaSeconds = seconds - (minutes * 60);
  const secondsText = `${deltaSeconds < 10
    ? '0'
    : ''}${deltaSeconds} second${deltaSeconds !== 1
    ? 's'
    : ''}`;
  return `${daysText}, ${hoursText}, ${minutesText}, ${secondsText}`;
};
