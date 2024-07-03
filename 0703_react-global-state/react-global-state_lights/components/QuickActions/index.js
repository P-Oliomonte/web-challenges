import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  onAllLightsOn,
  onAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={onAllLightsOff}
        disabled={lights.filter((light) => light.isOn).length === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={onAllLightsOn}
        disabled={lights.filter((light) => light.isOn).length === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
