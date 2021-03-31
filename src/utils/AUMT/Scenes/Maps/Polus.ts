import {
  AREAS_FILL_STYLE,
  AREAS_FONT_SIZE,
  AREAS_LINE_WIDTH,
  AREAS_STROKE_STYLE,
  POLUS_SCALE,
} from "constants/maps";

import Layer from "utils/AUMT/Layer";
import Map from "../Map";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";

export default class Polus extends Map {
  public constructor() {
    super("Polus", POLUS_SCALE);

    const areas = new Layer();

    areas.entities.push(
      new TextLine(
        i18n.t("maps.dropship"),
        new Vector(4600, 1000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.security"),
        new Vector(950, 3700),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.electrical"),
        new Vector(2600, 3850),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.storage"),
        new Vector(5600, 3800),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.laboratory"),
        new Vector(9400, 2800),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.o2"),
        new Vector(800, 5200),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.communications"),
        new Vector(3200, 5000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.office"),
        new Vector(5400, 5300),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.weapons"),
        new Vector(3400, 6800),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.admin"),
        new Vector(6400, 6600),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    areas.entities.push(
      new TextLine(
        i18n.t("maps.specimenRoom"),
        new Vector(9800, 6000),
        true,
        AREAS_FONT_SIZE,
        AREAS_STROKE_STYLE,
        AREAS_FILL_STYLE,
        AREAS_LINE_WIDTH
      )
    );

    this.layers.push(areas);

    // TODO - Add tasks
    // TODO - Add zones
    // TODO - Add vents/vent connections

    this.layers.push(this.players);
  }
}