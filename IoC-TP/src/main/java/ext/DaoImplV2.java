package ext;

import dao.IDao;

public class DaoImplV2 implements IDao {
    @Override
    public double getData() {
        System.out.println("Version WebServices");
        double temp=40;
        return temp;
    }
}
