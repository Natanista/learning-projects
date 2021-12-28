import java.time.LocalDate;
import java.time.Period;

public class BirthDayCalc {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalDate birthDate = LocalDate.of(1999,12,19);
        int years = Period.between(birthDate, today).getYears();
        System.out.println(years);
    }
}
