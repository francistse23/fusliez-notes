import {
  getCharacters,
  getCurrentMap,
  resetCharacters,
  setCharacterPosition,
  setCurrentMap,
} from "store/slices/MapsSlice";
import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import Draggable from "react-draggable";
import MiraHq from "./MiraHq";
import Polus from "./Polus";
import React from "react";
import TheSkeld from "./TheSkeld";
import useStyles from "./MapsPanel.styles";
import { useTranslation } from "react-i18next";

export default function MapsPanel(): JSX.Element {
  const { t } = useTranslation();

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);

  const players = useSelector(getCharacters);
  const map = useSelector(getCurrentMap);

  const dispatch = useDispatch();

  const classes = useStyles({
    map: map,
    isMobile,
    orientation,
  });

  let currentMap = <TheSkeld />;

  if (map === "MiraHq") {
    currentMap = <MiraHq />;
  } else if (map === "Polus") {
    currentMap = <Polus />;
  }

  return (
    <div id="maps" data-testid="maps-panel" className={classes.MapsPanel}>
      <div className={classes.MapsHeader}>
        {!isMobile && <h2 className={classes.MapsTitle}>{t("maps.title")}</h2>}
        <div className={classes.MapsToggle}>
          <Button
            data-testid="the-skeld-button"
            className={classes.MapsToggleButton}
            pressed={map === "TheSkeld"}
            onClick={() => dispatch(setCurrentMap("TheSkeld"))}
          >
            The Skeld
          </Button>
          <Button
            data-testid="mira-hq-button"
            className={classes.MapsToggleButton}
            pressed={map === "MiraHq"}
            onClick={() => dispatch(setCurrentMap("MiraHq"))}
          >
            Mira HQ
          </Button>
          <Button
            data-testid="polus-button"
            className={classes.MapsToggleButton}
            pressed={map === "Polus"}
            onClick={() => dispatch(setCurrentMap("Polus"))}
          >
            Polus
          </Button>
        </div>
      </div>
      <div className={classes.MapContainer}>
        {currentMap}

        <div className={classes.DraggableHeader}>
          <h3>{t("maps.dragInstructions")}</h3>
          <Button onClick={() => dispatch(resetCharacters())}>
            {t("maps.removePlayers")}
          </Button>
        </div>

        {players.map((player) => (
          <Draggable
            key={player.id}
            bounds="parent"
            position={{ x: player.x, y: player.y }}
            onStop={(event, data) => {
              dispatch(
                setCharacterPosition({
                  id: player.id,
                  x: data.lastX,
                  y: data.lastY,
                })
              );
            }}
          >
            <img
              src={`assets/images/playerIcons/${player.id}.png`}
              className={classes.MapPlayerIcon}
              onDrag={(event: React.DragEvent<HTMLImageElement>) =>
                event.stopPropagation()
              }
              draggable={false}
            />
          </Draggable>
        ))}
      </div>
    </div>
  );
}
