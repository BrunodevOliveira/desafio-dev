export interface TicketResult {
  dateTime:             Date;
  dateTimeMilliseconds: number;
  operationID:          number;
  error:                null;
  result:               Ticket[];
}

export interface Ticket {
  situacao:                  string;
  Usuario:                   string;
  idprioridade:              number;
  data_limit:                string;
  tempoatrasohh:             number;
  prazohh:                   number;
  unidade:                   string;
  datahorafim:               Date;
  Atividade:                 string;
  DescricaoJustSuspensao:    string | null;
  idsolicitante:             number;
  data_fim:                  string;
  gruponivel1:               string;
  OrigemAtendimento:         string;
  data_solicitacao:          Date;
  analise:                   string;
  ICs:                       string | null;
  tempoatendimentohh:        number;
  nota:                      string;
  DescricaoUltimaOcorrencia: string;
  idsolicitacaoservico:      number;
  situacaosla:               string;
  tipoDemanda:               string;
  Servico:                   string;
  tempoatrasomm:             number;
  idacordonivelservico:      number;
  prazomm:                   number;
  Responsavel:               string;
  Portfolio:                 string;
  tempoMedioMin:             number;
  GrupoAtual:                string;
  datahorasuspensao:         string | null;
  Descricao:                 string;
  titulosla:                 string;
  Contrato:                  string;
  nomeprioridade:            string;
  datahorasuspensaosla:      Date;
  horaabertura:              string;
  analisebase:               string;
  slaAtrasado:               string;
  tempoatendimentomm:        number;
  idGrupoAtual:              string | null;
}
