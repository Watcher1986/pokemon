import { capitalize } from './capitalize';

export const getFormatedSkill = (skill) => {
  const splitedString = skill.split('-');

  if (splitedString.length === 1) {
    return capitalize(skill);
  }

  return `SP ${capitalize(splitedString[1])}`;
};
