import Button from "components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Score from "components/ScoreControls/Score";
import useStyles from "./WinsLossesButton.styles";

export interface IWinsLossesButtonProps {
  buttonBackgroundColor: string;
  buttonBackgroundColorHover: string;
  decrement: () => void;
  increment: () => void;
  score: number;
  setScore: (value: number) => void;
}

export default function WinsLossesButton(
  props: IWinsLossesButtonProps
): JSX.Element {
  const {
    buttonBackgroundColor,
    buttonBackgroundColorHover,
    decrement,
    increment,
    score,
    setScore,
  } = props;

  const classes = useStyles({
    buttonBackgroundColor,
    buttonBackgroundColorHover,
  });

  return (
    <div className={classes.WinsLossesButtonContainer}>
      <Button
        data-testid="minus score"
        onClick={() => decrement()}
        className={`${classes.winsLossesButton} ${classes.winsLossesButtonLeft}`}
      >
        <FontAwesomeIcon icon="minus" />
      </Button>
      <Score
        data-testid="score"
        value={score}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setScore(parseInt(event.currentTarget.value))
        }
      />
      <Button
        data-testid="plus score"
        onClick={() => increment()}
        className={`${classes.winsLossesButton} ${classes.winsLossesButtonRight}`}
      >
        <FontAwesomeIcon icon="plus" />
      </Button>
    </div>
  );
}
