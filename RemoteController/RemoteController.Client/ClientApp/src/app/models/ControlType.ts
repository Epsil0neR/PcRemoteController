export enum ControlType {
  /**
     * Default control type. Invalid for usage.
     */
  None,

  /**
     * Invokes regular key, keys combination or special key.
     */
  Key,

  /**
     * Controls output volume
     */
  Volume,

  /**
     * Shows communication output. Temporary control type.
     */
  Output,

  /**
     * Executes specific commands.
     */
  Command,

  /**
     * Provides access to file system.
     */
  FileSystem,

  /**
     * Shows some info from informers.
     */
  Info
}
