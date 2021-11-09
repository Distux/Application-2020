/**
 * @(#)CarComponent.java
 *
 * Calls car class to get drawhng
 * @author Kalea Gin  
 * @version 1.00 2021/11/3
 */
 
import java.awt.Graphics;
import java.awt.Graphics2D;
import javax.swing.JComponent;
import java.awt.Color;
import java.awt.Rectangle;
import java.awt.geom.Ellipse2D;
import java.awt.geom.Line2D;
import java.awt.geom.Point2D;
 
public class CarComponent extends JComponent
{
    private int x;
    private int y;
    private int x2;
    private int y2;
    
    private int scale = 1;
    public void paintComponent(Graphics g)
    {
        Graphics2D g2 = (Graphics2D) g;
        Color c = Color.CYAN;
        g2.setColor(c);
        Car car = new Car(x, y, c, scale);
        Car car2 = new Car(x2,y2, c, scale);
        car.draw(g2);
        car2.draw(g2);
    }
    
    public CarComponent(int x1, int y1)
    {
        x =  x1;
        y = y1;
        x2 =  x1 + 100;
        y2 = y1 + 100;
        
        
    }
    public CarComponent()
    {
        x = 0; //getWidth();
        y = 0; //getHeight();
        x2 = 100;
        y2 = 100;
    }
    
   
 
 
 
    public void moveBy(int x1, int y1)//, Graphics g)
    {
        x += x1;
        y += y1;
        x2 -= x1;
        y2 -= y1;
        //paintComponent(g);
        repaint();
    }
 
}
