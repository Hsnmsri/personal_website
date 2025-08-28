export default interface OverviewWindow {
  title?: string;
  visibility: boolean;
  resize: boolean;
  onHide: () => void;
}
