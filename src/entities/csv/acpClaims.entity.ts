export class AcpSalesEntity {
  constructor(
    public Account: string,
    public SAC: string,
    public OrderId: string,
    public CurrentState: string,
    public MDN: string,
    public ActivationDate: string,
    public TribalStatus: string,
  ) {}
  public isDuplicate: boolean;
}

export class AcpClaimableDevicesEntity {
  constructor(public OrderId: string, public SAC: string, public MDN: string, public AccountStatus, public EnrolledOn: string, public isDuplicate: boolean) {}
}
