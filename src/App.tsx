import ButtonWithTooltip from './ButtonWithTooltip';
import {Square} from "./Square";

export default function App() {
  return (
      <div>
          <Square/>
        <ButtonWithTooltip
            tooltipContent={
              <div>
                Эта всплывающая подсказка не помещается над кнопкой.
                <br />
                Вот почему она отображается снизу!
              </div>
            }
        >
          Наведите курсор на меня (всплывающая подсказка сверху)
        </ButtonWithTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithTooltip
            tooltipContent={
              <div>Эта всплывающая подсказка помещается над кнопкой.</div>
            }
        >
          Наведите курсор на меня (всплывающая подсказка снизу)
        </ButtonWithTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithTooltip
            tooltipContent={
              <div>Эта всплывающая подсказка помещается над кнопкой.</div>
            }
        >
          Наведите курсор на меня (всплывающая подсказка снизу)
        </ButtonWithTooltip>
      </div>
  );
}
