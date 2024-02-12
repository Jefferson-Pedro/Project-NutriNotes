package br.com.nutrinotes.dto;

import br.com.nutrinotes.model.business.Business;

public class BusinessDTO {
	
	private Integer idBusiness;
	private String nome;
	private String cnpj;
	private String cep;
	private String telefone;
	private String logradouro;
	private String compl;
	private String cidade;
	private String bairro;
	private String uf;
	private String representante;
	private String plano;
	private Integer idUser;
	private String nomeUser;
		
	//					GET AND SET
	
	public Integer getIdBusiness() {
		return idBusiness;
	}
	
	public void setIdBusiness(Integer idBusiness) {
		this.idBusiness = idBusiness;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getCnpj() {
		return cnpj;
	}
	
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	public String getCep() {
		return cep;
	}
	
	public void setCep(String cep) {
		this.cep = cep;
	}
	
	public String getTelefone() {
		return telefone;
	}
	
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	
	public String getLogradouro() {
		return logradouro;
	}
	
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	
	public String getCompl() {
		return compl;
	}
	
	public void setCompl(String compl) {
		this.compl = compl;
	}
	
	public String getCidade() {
		return cidade;
	}
	
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	
	public String getBairro() {
		return bairro;
	}
	
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	
	public String getUf() {
		return uf;
	}
	
	public void setUf(String uf) {
		this.uf = uf;
	}
	
	public String getRepresentante() {
		return representante;
	}
	
	public void setRepresentante(String representante) {
		this.representante = representante;
	}
	
	public String getPlano() {
		return plano;
	}
	
	public void setPlano(String plano) {
		this.plano = plano;
	}
	
	public Integer getIdUser() {
		return idUser;
	}
	
	public void setIdUser(Integer IdUser) {
		this.idUser = IdUser;
	}	
	
	public String getNomeUser() {
		return nomeUser;
	}

	public void setNomeUser(String nomeUser) {
		this.nomeUser = nomeUser;
	}

	public static BusinessDTO toBusinessDTO(Business business) {
		  BusinessDTO dto = new BusinessDTO();
		  	dto.setIdBusiness(business.getIdBusiness());
	        dto.setNome(business.getNome());
	        dto.setCnpj(business.getCnpj());
	        dto.setCep(business.getCep());
	        dto.setTelefone(business.getTelefone());
	        dto.setLogradouro(business.getLogradouro());
	        dto.setCompl(business.getCompl());
	        dto.setCidade(business.getCidade());
	        dto.setBairro(business.getBairro());
	        dto.setUf(business.getUf());
	        dto.setRepresentante(business.getRepresentante());
	        dto.setPlano(business.getPlano());
	        dto.setIdUser(business.getResponsavelTec().getIdUser());
	        dto.setNomeUser(business.getResponsavelTec().getNome());
	        
	    return dto;
	}

}
