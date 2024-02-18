package metier;

import dao.IDao;

public class Metier implements IMetier{
    private IDao dao;
    @Override
    public double calcul() {
        double tmp=dao.getData();
        double res=tmp*5;
        return res;
    }
    public void setDao(IDao dao) {
        this.dao = dao;
    }
}
